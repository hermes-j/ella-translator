/**
 * 문자열 처리를 위한 문서.
 */
import Inko from 'inko';

/**
 * 문자열 뒤집기(엘라어 표기방식에 의함), 영-한 변환
 * @param str input string
 * @returns reversed, eng-to-kor string
 */
export const translateString = (str: string) => {
  const inko = new Inko();

  const charArray = str.split('');

  // reverse
  charArray.reverse();
  // en2ko
  const result = inko.en2ko(charArray.join(''));
  // join result string and return
  return result;
};

/**
 * translateString의 반대 버전. 한글-엘라 변환 개발중
 * @param str input string
 * @returns reversed, kor-to-eng string
 */
export const kor2eng = (str: string) => {
  const inko = new Inko();
  const charArray = str.split('');
  // reverse
  charArray.reverse();
  // en2ko
  const result = inko.ko2en(charArray.join(''));
  // join result string and return
  return result;
};
