import "styled-components";

// styled-components 확장하기
declare module "styled-components" {
  export interface DefaultTheme {
  textColor: string;
  bgColor: string;
  accentBgColor:string;
  }
}