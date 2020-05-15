import React from 'react';

const KakaoJavascriptKey = process.env.KAKAO_JAVASCRIPT_KEY;

const kakaoScriptString = `
  window.Kakao.init('${KakaoJavascriptKey}');
`;

export function KakaoScriptInit() {
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: kakaoScriptString }} />;
}
