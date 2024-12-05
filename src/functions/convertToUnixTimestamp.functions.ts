export default  function convertToUnixTimestamp(dateString: string): number {
    const date = new Date(dateString);
    return Math.floor(date.getTime() / 1000);
  }