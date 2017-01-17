export function diceRolled(number) {
  return {
    type: 'DICE_ROLLED',
    number,
  };
}

export function rollDice() {
  return dispatch => {
    const payloadBody = {
      method: 'generateIntegers',
      jsonrpc: '2.0',
      params: {
        apiKey: '5047c35e-b0ac-4666-8619-1fad7327e727',
        n: 2,
        min: 1,
        max: 20
      },
      id: 1,
    };

    fetch('https://api.random.org/json-rpc/1/invoke', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payloadBody)
    })
    .then(response => response.json())
    .then((response) => {
      dispatch(diceRolled(response.result.random.data[0]));
      // console.log('RESPONSE', response.result.random.data);
    });
  };
}
