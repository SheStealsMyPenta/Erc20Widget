import logo from './logo.svg';
import './App.css';
import { WalletContext, WalletProvider } from './WalletContext';
import { StarknetProvider } from "./component/starknet-provider";
import CreateERC20Token from './uiComponent/Container';
// import WrapContainer from './uiComponent/Container';

function App() {
  return (
    <div className="App">
      <StarknetProvider>
        <WalletProvider>
            {/* <WrapContainer></WrapContainer> */}
            <CreateERC20Token></CreateERC20Token>
        </WalletProvider>
      </StarknetProvider>
    </div>

  );
}

export default App;
