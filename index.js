import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';

const makeTree = () => {
  const tree = mkdir('nodejs-package', [
    mkfile('Makefile', {}),
    mkfile('README.md', {}),
    mkdir('dist', [], {}),
    mkdir('__tests__', [
      mkfile('half.test.js', { type: 'text/javascript' }),
    ], {}),
    mkfile('babel.config.js', { type: 'text/javascript' }),
    mkdir('node_modules', [
      mkdir('@babel', [
        mkdir('cli', [
          mkfile('LICENSE', {}),
        ], {}),
      ], {}),
    ], { owner: 'root', hidden: false }),
  ], { hidden: true });
  return tree;
};

const myTree = makeTree();

console.log(JSON.stringify(myTree, null, 4));