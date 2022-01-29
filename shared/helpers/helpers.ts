export const getValidDate = (date: string) => {
   if (date) {
      const dateInfon = new Date(date);
      const month = dateInfon.getMonth() + 1;
      const day = dateInfon.getDate();
      const year = dateInfon.getFullYear();
      return `${day < 10 ? `0${day}` : day}.${
         month < 10 ? `0${month}` : month
      }.${year}`;
   }
   return '';
};
