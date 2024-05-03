import { useState, useEffect } from 'react'

function App() {
  const hiragana = [
    { romanji: 'a', hiragana: 'あ' },
		{ romanji: 'i', hiragana: 'い' },
		{ romanji: 'u', hiragana: 'う' },
		{ romanji: 'e', hiragana: 'え' },
		{ romanji: 'o', hiragana: 'お' },
		{ romanji: 'ka', hiragana: 'か' },
    { romanji: 'ga', hiragana: 'が' },
		{ romanji: 'ki', hiragana: 'き' },
    { romanji: 'gi', hiragana: 'ぎ' },
    { romanji: 'kya', hiragana: 'きゃ' },
    { romanji: 'gya', hiragana: 'ぎゃ' },
		{ romanji: 'ku', hiragana: 'く' },
    { romanji: 'gu', hiragana: 'ぐ' },
    { romanji: 'kyu', hiragana: 'きゅ' },
    { romanji: 'gyu', hiragana: 'ぎゅ' },
		{ romanji: 'ke', hiragana: 'け' },
    { romanji: 'ge', hiragana: 'げ' },
		{ romanji: 'ko', hiragana: 'こ' },
    { romanji: 'go', hiragana: 'ご' },
    { romanji: 'kyo', hiragana: 'きょ' },
    { romanji: 'gyo', hiragana: 'ぎょ' },
		{ romanji: 'sa', hiragana: 'さ' },
    { romanji: 'za', hiragana: 'ざ' },
		{ romanji: 'shi', hiragana: 'し' },
    { romanji: 'ji', hiragana: 'じ' },
    { romanji: 'sha', hiragana: 'しゃ' },
    { romanji: 'jya', hiragana: 'じゃ' },
		{ romanji: 'su', hiragana: 'す' },
    { romanji: 'zu', hiragana: 'ず' },
    { romanji: 'shu', hiragana: 'しゅ' },
    { romanji: 'jyu', hiragana: 'じゅ' },
		{ romanji: 'se', hiragana: 'せ' },
    { romanji: 'ze', hiragana: 'ぜ' },
		{ romanji: 'so', hiragana: 'そ' },
    { romanji: 'zo', hiragana: 'ぞ' },
    { romanji: 'sho', hiragana: 'しょ' },
    { romanji: 'jyo', hiragana: 'じょ' },
		{ romanji: 'ta', hiragana: 'た' },
		{ romanji: 'chi', hiragana: 'ち' },
    { romanji: 'cha', hiragana: 'ちゃ' },
    { romanji: 'ja', hiragana: 'ぢゃ' },
    { romanji: 'chu', hiragana: 'ちゅ' },
    { romanji: 'ju', hiragana: 'ぢゅ' },
    { romanji: 'cho', hiragana: 'ちょ' },
    { romanji: 'jo', hiragana: 'ぢょ' },
		{ romanji: 'tsu', hiragana: 'つ' },
		{ romanji: 'te', hiragana: 'て' },
		{ romanji: 'to', hiragana: 'と' },
		{ romanji: 'na', hiragana: 'な' },
    { romanji: 'nya', hiragana: 'にゃ' },
		{ romanji: 'ni', hiragana: 'に' },
		{ romanji: 'nu', hiragana: 'ぬ' },
    { romanji: 'nyu', hiragana: 'にゅ' },
		{ romanji: 'ne', hiragana: 'ね' },
		{ romanji: 'no', hiragana: 'の' },
    { romanji: 'nyo', hiragana: 'にょ' },
		{ romanji: 'ha', hiragana: 'は' },
		{ romanji: 'hya', hiragana: 'ひゃ' },
    { romanji: 'bya', hiragana: 'びゃ' },
    { romanji: 'pya', hiragana: 'ぴゃ' },
    { romanji: 'hi', hiragana: 'ひ' },
    { romanji: 'hyu', hiragana: 'ひゅ' },
    { romanji: 'byu', hiragana: 'びゅ' },
    { romanji: 'pyu', hiragana: 'ぴゅ' },
		{ romanji: 'fu', hiragana: 'ふ' },
		{ romanji: 'he', hiragana: 'へ' },
		{ romanji: 'ho', hiragana: 'ほ' },
    { romanji: 'byo', hiragana: 'びょ' },
    { romanji: 'pyo', hiragana: 'ぴょ' },
    { romanji: 'hyo', hiragana: 'ひょ' },
		{ romanji: 'ma', hiragana: 'ま' },
		{ romanji: 'mi', hiragana: 'み' },
    { romanji: 'mya', hiragana: 'みゃ' },
		{ romanji: 'mu', hiragana: 'む' },
    { romanji: 'myu', hiragana: 'みゅ' },
		{ romanji: 'me', hiragana: 'め' },
		{ romanji: 'mo', hiragana: 'も' },
    { romanji: 'myo', hiragana: 'みょ' },
		{ romanji: 'ya', hiragana: 'や' },
		{ romanji: 'yu', hiragana: 'ゆ' },
		{ romanji: 'yo', hiragana: 'よ' },
		{ romanji: 'ra', hiragana: 'ら' },
		{ romanji: 'ri', hiragana: 'り' },
    { romanji: 'rya', hiragana: 'りゃ' },
		{ romanji: 'ru', hiragana: 'る' },
    { romanji: 'ryu', hiragana: 'りゅ' },
		{ romanji: 're', hiragana: 'れ' },
		{ romanji: 'ro', hiragana: 'ろ' },
    { romanji: 'ryo', hiragana: 'りょ' },
		{ romanji: 'wa', hiragana: 'わ' },
		{ romanji: 'wo', hiragana: 'を' },
		{ romanji: 'n', hiragana: 'ん' }
  ]

  const [input, setInput] = useState("")
  const [current, setCurrent] = useState(0)

  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)

  const [error, setError] = useState(false)

  const setRandomHiragana = () => {
    const randomIndex = Math.floor(Math.random() * hiragana.length)
    setCurrent(randomIndex)
  }

  const handleChange = event => {
    setInput(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (input.toLowerCase() === hiragana[current].romanji) {
      setStreak(streak + 1)
      setMaxStreak(Math.max(streak + 1, maxStreak))
      setError(false)

      localStorage.setItem('maxStreak', Math.max(streak, maxStreak))
      localStorage.setItem('streak', streak + 1)
    } else {
      setStreak(0)
      setError(`Wrong! The correct answer for ${hiragana[current].hiragana} is ${hiragana[current].romanji}`) // use backtick for interpolation

      localStorage.setItem('streak', 0)
    }
    // reset everything
    setInput('')
    setRandomHiragana()
    }

    useEffect(() => {
      setRandomHiragana()
      setStreak(parseInt(localStorage.getItem('streak')) || 0)
      setMaxStreak(parseInt(localStorage.getItem('maxStreak')) || 0)
    }, [])

  return (
   <div>
    <header>
      <h1>Hiragana Quiz</h1>
        <div>
          <p>{streak}/{maxStreak}</p>
        </div>
    </header>

    <div>
      {hiragana[current].hiragana}
    </div>

    <div>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={input}
        onChange={handleChange}/>
      </form>
    </div>

    {error && <p>{error}</p>}
   </div>
  )
}

export default App
