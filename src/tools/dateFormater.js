export const dateFormater = (date) => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();

  const monthTxt = month < 10 ? `0${month}` : `${month}`;
  const dayTxt = day < 10 ? `0${day}` : `${day}`;
  const hourTxt = hour < 10 ? `0${hour}` : `${hour}`;
  const minsTxt = mins < 10 ? `0${mins}` : `${mins}`;
  const secsTxt = secs < 10 ? `0${secs}` : `${secs}`;

  const formatedDate = {
    date: `${year}-${monthTxt}-${dayTxt}`,
    hour: `${hourTxt}:${minsTxt}:${secsTxt}`,
    seed: hourTxt,
    seconds: secs
  }

  return formatedDate;
};
