  export function pushToArr(element, setArray) {
    setArray(a => [...a, element])
  }

  export function filterArr(callback, setArray) {
    setArray(a => a.filter(callback))
  }

  export function updateArr(index, newElement, setArray) {
    setArray(a => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length),
    ])
  }

  export function removeFromArr(index, setArray) {
    setArray(a => [...a.slice(0, index), ...a.slice(index + 1, a.length)])
  }

  export function clearArr(setArray) {
    setArray([])
  }

