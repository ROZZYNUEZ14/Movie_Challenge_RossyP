import PropTypes from "prop-types"

export function Button({text}){
    console.log(text)
    return <button>
        {text}
    </button>
}

Button.PropTypes= {
    text: PropTypes.string
}