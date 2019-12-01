import React from 'react';
import { exportDefaultDeclaration } from '@babel/types';
import { func } from 'prop-types';

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
}

function Greetings({ name, mark, optional } : GreetingsProps) {
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
    </div>
  );
}

Greetings.defaultProps = {
  mark: '!'
};

// export default Greetings;