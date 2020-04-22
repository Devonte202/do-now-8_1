const container = document.getElementById('container')

const Greeting = ({props}) => {
    const [greeting, setGreeting] = React.useState('Good Morning')
    const toLanguage = (language) => {
        setGreeting(props[language])
    }
    
    return (
        <div>
            <h1>{greeting}</h1>
            {Object.keys(props)
            .map((language) => <button key={language} onClick={() => toLanguage(language)}>{language}</button> )}
		</div>
        )
}

const greetings = {
    English: "Good Morning",
    Spanish: "Buenos Dias",
    Kreole: "Bonjou",
    Portuguese: "Bon Dia",
    Hindi: "Shubh Prabat",
    NYC: "YERRRR ITS DEADASS THE SUN B",
}
    


ReactDOM.render(
	<Greeting props = {greetings}/>,
	container
);