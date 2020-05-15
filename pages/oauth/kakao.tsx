import React from 'react';
import { NextPage } from 'next';
import queryString from 'query-string';
import _isEmpty from 'lodash/isEmpty';

import firebase from '@utils/initFirebase';
import axios from '@utils/axios';
import {
  KakaoOAuthTokenResponse,
  KakaoOAuthTokenRequest,
  KakaoAccountResponse,
} from '@models/kakao';
import { FirebaseCustomTokenRequest } from '@models/auth';
import LayoutContainer from '@containers/LayoutContainer';
import LoadingComponent from '@components/LoadingComponent';

interface PageProps {
  firebaseToken?: string;
}

const OAuthKakaoPage: NextPage<PageProps> = ({ firebaseToken }) => {
  if (firebaseToken) {
    firebase.auth().signInWithCustomToken(firebaseToken);
  }
  return (
    <LayoutContainer>
      <LoadingComponent />
    </LayoutContainer>
  );
};

OAuthKakaoPage.getInitialProps = async ({ query, isServer }) => {
  try {
    const { code } = query;
    const kakaoTokenRequest: KakaoOAuthTokenRequest = {
      grant_type: 'authorization_code',
      client_id: process.env.KAKAO_REST_API_KEY,
      redirect_uri: `${process.env.BASE_DOMAIN}/oauth/kakao`,
      code: code as string,
    };
    const { data: kakaoTokenData } = await axios.post<KakaoOAuthTokenResponse>(
      '/oauth/token',
      queryString.stringify(kakaoTokenRequest),
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        baseURL: 'https://kauth.kakao.com',
      },
    );

    const { data: kakaoUserData } = await axios.post<KakaoAccountResponse>(
      '/v2/user/me?secure_resource=true',
      {},
      {
        headers: {
          Authorization: `Bearer ${kakaoTokenData.access_token}`,
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        baseURL: 'https://kapi.kakao.com',
      },
    );

    const firebaseTokenRequestParams: FirebaseCustomTokenRequest = {
      userId: `kakao:${kakaoUserData.id}`,
      email: kakaoUserData.kakao_account.email,
      photoURL: kakaoUserData.kakao_account.profile.profile_image_url,
      nickname: kakaoUserData.kakao_account.profile.nickname,
    };

    const {
      data: { firebaseToken },
    } = await axios.post<{
      firebaseToken: string;
    }>('/getFirebaseToken', firebaseTokenRequestParams, {
      baseURL: process.env.FIERBASE_FUNCTIONS_DOMAIN,
    });
    return {
      firebaseToken,
    };
  } catch (error) {
    console.log(error);
    return {
      firebaseToken: undefined,
    };
  }
};

export default OAuthKakaoPage;
