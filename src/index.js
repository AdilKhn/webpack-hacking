import uniq from 'lodash/uniq';
import Foo from './foo';
import {actionCreator, actionFactory} from './factoryPattern';

let wrappedActionCreator = actionFactory(actionCreator);

wrappedActionCreator().method()
