import axios from 'axios';
import "dotenv/config.js";

const response = await axios.post(process.env.ALCHEMY_URL, {
  jsonrpc: "2.0",
  id: 1,

  // method: "eth_getBlockByNumber",
  // params: [
  //   "0xb443", // block 46147
  //   true  // retrieve the full transaction object in transactions array
  // ]

  // method: "eth_blockNumber"

  method: "eth_feeHistory",
  params: [
    4,
    "latest",
    [
      25,
      75
    ]
  ]
});

console.log(response.data.result);