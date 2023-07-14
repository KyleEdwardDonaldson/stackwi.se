import { Moment } from "moment";
import moment from "moment";

/** */
export const getFormattedDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

export const getTimeWorking = (dateOfFirstJob: Moment) => {
  let yearsSince = moment().diff(dateOfFirstJob, 'years');
  let dateWithoutYears = dateOfFirstJob.add(yearsSince, 'years');
  let yearUnit = getSingularOrPluralUnit('year', yearsSince);

  let monthsSince = moment().diff(dateWithoutYears, 'months');
  let dateWithoutYearsAndMonths = dateWithoutYears.add(monthsSince, 'months');
  let monthUnit = getSingularOrPluralUnit('month', monthsSince);

  let weeksSince = moment().diff(dateWithoutYearsAndMonths, 'weeks');
  let dateWithoutYearsMonthsAndWeeks = dateWithoutYearsAndMonths.add(
    weeksSince,
    'weeks',
  );
  let weekUnit = getSingularOrPluralUnit('week', weeksSince);
  let daysSince = moment().diff(dateWithoutYearsMonthsAndWeeks, 'days');
  let dayUnit = getSingularOrPluralUnit('day', daysSince);

  // If time is greater than 0, include in string delimited by comma
  let unitsSeparatedByComma =
    `${yearsSince > 0 ?
      `${yearsSince} ${yearUnit}` : ''}${monthsSince > 0 ? `, ${monthsSince} ${monthUnit}` : ''}${weeksSince > 0 ? `, ${weeksSince} ${weekUnit}` : ''}${daysSince > 0 ? `, ${daysSince} ${dayUnit}` : ''}.`;

  // Replace last comma with ' and'
  return replaceAt(
    unitsSeparatedByComma.lastIndexOf(','),
    unitsSeparatedByComma,
    ' and',
  );
};

export const getSingularOrPluralUnit = (
  unit: 'year' | 'month' | 'week' | 'day',
  time: number,
) => {
  return `${unit}${time > 1 ? 's' : ''}`;
};

export const replaceAt = (
  index: number,
  stringToReplace: string,
  replacement: string,
) => {
  return (
    stringToReplace.substring(0, index) +
    replacement +
    stringToReplace.substring(index + 1)
  );
};