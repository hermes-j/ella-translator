import { useState } from 'react';
import './App.css';
import InputBox from './components/inputbox';
import KeyButton from './components/keybutton';
import './font/font.css';
import Button from './components/button';
import { jaum, moum } from './constants/alphas';

// icons
import {
  HiOutlineBackspace as IconBackspace,
  // HiSwitchVertical as IconSwitch,
  HiSwitchHorizontal as IconReverse,
} from 'react-icons/hi';
import {
  MdSpaceBar as IconSpacebar,
  MdDelete as IconDelete,
} from 'react-icons/md';
import { translateString } from './functions/string';

function App() {
  const [lang, setLang] = useState('KR');
  const [font] = useState('Ella');
  const [content, setContent] = useState('');
  const [order] = useState(false);
  // const [order, setOrder] = useState(false);

  const onKeyClick = (value: string) => {
    setContent(content + value);
  };

  const onSpace = () => {
    setContent(content + ' ');
  };

  const onBackSpace = () => {
    setContent(content.slice(0, -1));
  };

  const KeyButtonList = () => {
    const jaumButtonList = jaum.map((alpha) => (
      <KeyButton style={{ fontFamily: font }} onClick={() => onKeyClick(alpha)}>
        {alpha}
      </KeyButton>
    ));
    const moumButtonList = moum.map((alpha) => (
      <KeyButton style={{ fontFamily: font }} onClick={() => onKeyClick(alpha)}>
        {alpha}
      </KeyButton>
    ));
    return (
      <div>
        <div>{jaumButtonList}</div>
        <div>{moumButtonList}</div>
      </div>
    );
  };

  return (
    <div className='App'>
      <div
        style={{ paddingTop: '0.1rem', userSelect: 'none' }}
        title='엘라어 번역기'
      >
        <h1 style={{ fontFamily: 'Ella' }}>lrrudsjq jdkffljd</h1>
      </div>

      {/* 폰트 선택, 엘라어 이외의 문자가 나올 일은 없어 보임 */}
      {/* <div style={{ margin: '0 1rem' }}>
        <Button onClick={() => setFont('Ella')}>
          {lang === 'KR' ? '엘라어' : 'Ella'}
        </Button>
      </div> */}
      {/* I/O */}
      <div style={order === false ? styles.orderZero : styles.orderOne}>
        <InputBox
          id='Ella'
          className='content'
          style={{ fontFamily: font, fontSize: '2em' }}
          value={content}
          placeholder='djlffk'
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            if (!order) setContent(event.target.value);
          }}
          readOnly={order}
        />
        <KeyButton style={{ margin: 10 }}>
          <IconReverse
            style={{ display: 'grid', alignItems: 'center' }}
            size='40'
            title='문자열 뒤집기'
            onClick={() => {
              setContent(content.split('').reverse().join(''));
            }}
          />
        </KeyButton>
        <InputBox
          id='alpha'
          className='result'
          style={{ fontFamily: 'NanumGothic', fontSize: 25, fontWeight: 500 }}
          value={translateString(content)}
          placeholder={lang === 'KR' ? '한글' : 'Hangul (Korean)'}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            if (order) setContent(translateString(event.target.value));
          }}
          readOnly={!order}
        />
      </div>

      {/* Keybutton */}
      <div style={{ margin: '0.5rem 1rem' }}>
        <KeyButtonList />
      </div>

      {/* space, backspace and delete */}
      <div style={{ marginTop: '10px' }}></div>
      <KeyButton onClick={() => onSpace()} title='Space'>
        <IconSpacebar style={{ height: '2rem' }} />
      </KeyButton>
      <KeyButton onClick={() => onBackSpace()} title='Backspace'>
        <IconBackspace style={{ height: '2rem' }} />
      </KeyButton>
      <KeyButton onClick={() => setContent('')} title='Delete All'>
        <IconDelete style={{ height: '2rem' }} />
      </KeyButton>

      {/* comment line */}
      <div style={{ marginTop: '2%' }}>
        <hr style={{ marginBottom: '2%' }} />
        MMORPG 게임 '로스트아크'에 등장하는 가공의 언어 '엘라'의 번역기입니다.{' '}
        <br />
        한글을 기반으로 하여 만들어졌으나 한글과는 다르게{' '}
        <b>오른쪽에서 왼쪽으로 쓰고 읽으며</b>, 쌍자음(ㄲ, ㅆ 등)과 겹모음(ㅔ,
        ㅚ 등)을 단자음과 단모음의 조합으로 나타낸다는 차이점이 있습니다.
        <br />
        (예시) '쌍' → 'ㅅㅅㅏㅇ', '엘' → 'ㅇㅓㅣㄹ'
        <br />
        <br />
        <b>사용법</b> <br />
        자판에서 번역하고자 하는 문자를 클릭해 입력합니다. 입력한 내용은 아래쪽
        텍스트칸에서 변환되어 나타납니다. <br />두 텍스트칸 사이의 버튼을 이용해
        문자열을 반대로 뒤집을 수 있으며, 이를 이용해 번역 시 편하게 왼쪽부터
        오른쪽으로 입력 후 뒤집을 수 있습니다. <br />
        <br />
        <b>주의점</b>
        <br />
        엘라어의 표기법 특성상, 쌍자음을 표기할 경우 그 내용을 읽는 자가 문맥에
        맞게 파악해야 한다는 문제점이 있습니다. <br />
        (예시: '아빠'를 엘라어로 적으면 이게 '아빠'인지 '압바'인지 문맥으로만
        파악해야 합니다. )
        <br />본 번역기는 쌍자음 초성을 처리하지 않도록 되어 있습니다. 만약 번역
        도중에 'ㄱ굼', 'ㅂ불' 같은 식으로 내용이 나온다면 '꿈', '뿔'과 같이
        이해하시면 될 것 같습니다.
      </div>

      {/* Language & Github */}
      <div style={{ marginTop: '1%' }}>
        <a href='https://github.com/ramzoon/genshin-translate' target='blank'>
          <Button>Github</Button>
        </a>
        <a
          href='https://www.inven.co.kr/board/lostark/4811/4751346'
          target='blank'
        >
          <Button>
            {lang === 'KR' ? '폰트 출처(인벤)' : 'Font Source(Inven)'}
          </Button>
        </a>
      </div>
      <div>
        <Button onClick={() => setLang('KR')}>한국어</Button>
        <Button onClick={() => setLang('EN')}>English</Button>
      </div>

      {/* Hits */}
      <a href='https://hits.seeyoufarm.com'>
        <img
          style={{ marginTop: 10 }}
          src='https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fhermes-j.github.io%2Fella-translator&count_bg=%23008DFF&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false'
          alt=''
        />
      </a>
    </div>
  );
}

const styles = {
  orderZero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: '10px 0px',
  } as const,
  orderOne: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column-reverse',
    margin: '10px 0px',
  } as const,
};

export default App;
