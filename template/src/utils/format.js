export const formatDate = val => {
  if (val) {
    let date = new Date(val)
    return date.getFullYear() + '-' + (date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
  } else {
    return '-'
  }
}

export const formatFullDate = val => {
  if (val) {
    let date = new Date(val)
    let currentY = new Date().getFullYear()
    return date.getFullYear() + '年' + (date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '月' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + '日 ' + (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
  } else {
    return '-'
  }
}
// (date.getFullYear() === currentY ? '' :