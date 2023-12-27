import React from 'react';
import styles from './palindrome.module.css'

class PalindromeChecker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputString: "",
            isPalindrome: null,
        };
    }
    handleInputChange = (event) => {
        this.setState({ inputString: event.target.value, isPalindrome: null});
    };
    checkPalindrome = () => {
        const cleanStr = this.state.inputString.replace(/[^a-zA-Z0-9]/g, "")
                                                .toLowerCase();
        this.setState({isPalindrome: cleanStr === cleanStr.split("")
                                                          .reverse()
                                                          .join("")});
    }
    render(){
        const {inputString,isPalindrome} = this.state;
        return (
            <div className={styles["form-container"]}>
            
            
              <fieldset className={styles["form-fieldset"]}>
                <legend>Enter in text to check for a palindrome:</legend>
                <input type='text' id='palindromeInput' value={inputString} onChange={this.handleInputChange} name='palindromeInput'/>
                <button onClick={this.checkPalindrome}> Check</button>
              </fieldset>
             
            
            {isPalindrome !== null && (
                 <div className={styles["form-result"]}> <strong>{inputString}</strong> {isPalindrome ? "is" : "is not"} a palindrome.</div>
            )}
           
            </div>
        )
    }
}

export default PalindromeChecker;