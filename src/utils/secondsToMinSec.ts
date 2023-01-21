export const secondsToMinSec = (duration: number) => {
  duration = Number(duration)
  const h = Math.floor(duration / 3600)
  const m = Math.floor((duration % 3600) / 60)
  const s = Math.floor((duration % 3600) % 60)

  const hDisplay = h > 0 ? h + ':' : ''
  const mDisplay = m > 0 ? (m > 10 ? m : (h > 0 ? '0' : '') + m) + ':' : ''
  const sDisplay = s > 0 ? (s > 10 ? s : '0' + s) : '00'

  return hDisplay + mDisplay + sDisplay
}
