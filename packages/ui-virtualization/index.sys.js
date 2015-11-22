import {VirtualRepeat} from './src/virtual-repeat';
import {VirtualList} from './src/virtual-list';

export function configure(config){
  config.globalResources(
    './src/virtual-repeat',
    './src/virtual-list'
  );
}

export {
  VirtualRepeat,
  VirtualList
};
