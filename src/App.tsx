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
  HiSwitchVertical as IconSwitch,
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
          <IconSwitch
            style={{ display: 'grid', alignItems: 'center' }}
            size='40'
            title='한글-엘라 변환기능 개발중'
            onClick={() => {
              // setOrder(!order);
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
        <hr />
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
