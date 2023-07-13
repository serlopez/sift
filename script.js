const textElement = document.getElementById('main_text')
const optionButtonsElement = document.getElementById('button_container')

let state = {}

function startGame(){
    console.log("hi, mom!")
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex){
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while(optionButtonsElement.firstChild){
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        console.log('hello')
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => selectOption(option))
        optionButtonsElement.appendChild(button)
    })
}

function showOption(option){
    return true
}

function selectOption(option){
    console.log('click')
    const nextTextNodeId = option.nextText
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: "Hello.",
        options: [
            {
                text: "Hi.",
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'Thank you for playing.',
        options: [
            {
                text: 'ok',
                nextText: 3
            }
        ]
    }
    ,
    {
        id: 3,
        text: 'Here you will learn how to do college quality library research for class projects.',
        options: [
            {
                text: 'ok',
                nextText: 4
            },
            {
                text: 'like what?',
                nextText: 4
            }
        ]
    }
    ,
    {
        id: 4,
        text: 'Like essays, presentations, speeches or end of term papers.',
        options: [
            {
                text: 'ok',
                nextText: 5
            }
        ]
    }
]

startGame()