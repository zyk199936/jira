import {
  useEffect,
  useState
} from "react";

export const isFalsy = (value:unknown) => (value === 0 ? false : !value);

// 在一个函数里，改变传入的对象本身是不好的
// let a: object
// a = {name: 'jack'}
// a = () => {
// }
// a = new RegExp('')
//
// let b: { [key: string]: unknown }
// b = {name: 'Jack'}
// b = () => {}
// 在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object:{ [key: string]: unknown }) => { 
  const result = {
    ...object,
  };
  Object.keys(result).forEach((key) => {
    const value = result[key];                      
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};
//  自定义hook,初次加载
// hook不能在普通函数中使用，所以以use开头
export const useMount = (callback:()=>void) => {
  useEffect(() => {
    callback()
  }, [])
}

// 利用了闭包的原理
// const debounce = (func, delay) => {
//   let timeout;
//   return (...param) => {
//     if (timeout) {
//       clearTimeout(timeout)
//     }
//     timeout = setTimeout(() => {
//       func(...param)
//     }, delay)
//   }
// }

export const useDebounce =<V> (value:V, delay?:number) => {
  const [debounceValue, setDebounceValue] = useState(value)
  useEffect(() => {
    // 每次在value变化以后，设置一个定时器
    const timeout = setTimeout(() => setDebounceValue(value), delay)
    // 每一次在上次useEffect处理完以后再运行
    return () => clearTimeout(timeout)
  }, [value, delay])
  return debounceValue
}

// T[]数组里每一项都是T
export const useArray = <T>(initialArray: T[]) => {
  const [value, setValue] = useState(initialArray)
  return {
    value,
    setValue,
    add: (item: T) => setValue([...initialArray, item]),
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copy = [...initialArray]
      copy.splice(index, 1)
      setValue(copy)
    }
  }
}
