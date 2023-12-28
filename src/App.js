import logo from './logo.svg';
import styles from './App.module.css';
import PalindromeChecker from './components/palindrome'

function App() {
  return (
    <div className="text-center">
      <div className={styles.container}>
      <div> 
        <img src={logo} className={styles["App-logo"]} alt="logo" />
        <h1 className={styles['text-center']}>Is it a Palindrome?</h1>
      </div>

     <PalindromeChecker />
      
      <div className={styles.description}>
        <p>
          <i className='fa fa-lightbulb'></i> 
         A <em>palindrome</em> is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
        </p>
      </div>
       
      </div>
      <span className={styles["copyright"]}>&copy;2024 Sulaiman Adejumo &middot; Nottingham</span>
       
    </div>
  );
}

export default App;
