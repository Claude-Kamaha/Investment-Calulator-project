import calculator from '../assets/investment-calculator-logo.png';

export default function Header() {
    return (
        <div id="header">
    <h1 className="center">React Investment Calculator</h1>
        <img src={calculator} alt="text" />
        </div>  
    )
}