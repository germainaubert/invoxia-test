export const formatDate = (dateString: string, locale: string, displayTime?: boolean): string => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat(locale, {
    weekday: 'short',
    month: '2-digit',
    day: '2-digit',
    hour: displayTime ? '2-digit' : undefined,
    minute: displayTime ? '2-digit' : undefined
  }).format(date)
}
