import { compose } from "redux";
import withTypeRedirect from "../HOC/withTypeRedirect";
import Mintportal from "./Mintportal";
import { connect } from 'react-redux';
import Web3 from "web3";
//import WalletConnectProvider from "@walletconnect/web3-provider";

const MintportalConnect = (props) => {
      /*
      var account;

      // https://docs.walletconnect.com/quick-start/dapps/web3-provider
      var provider = new WalletConnectProvider.default({
        rpc: {
          1: "https://cloudflare-eth.com/", // https://ethereumnodes.com/
          137: "https://polygon-rpc.com/", // https://docs.polygon.technology/docs/develop/network-details/network/
          // ...

        },
        // bridge: 'https://bridge.walletconnect.org',
      });

      var connectWC = async () => {
        await provider.enable();

        //  Create Web3 instance
        const web3 = new Web3(provider);
        window.w3 = web3

        var accounts  = await web3.eth.getAccounts(); // get all connected accounts
        account = accounts[0]; // get the primary account
      }

      connectWC();
      */
      return <Mintportal {...props} />
}

const mapStateToProps = (state) => ({
    socialNetworks: state.settingsReducer.socialNetworks
})

export default compose(
    connect(mapStateToProps, {}),
    withTypeRedirect
)(MintportalConnect)