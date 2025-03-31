import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { faker } from "@faker-js/faker";

export function generateRandomQueryResult() {
  const columnTypes = [
    { name: "ID", generator: () => faker.string.uuid() },
    { name: "Name", generator: () => faker.person.fullName() },
    { name: "Age", generator: () => faker.number.int({ min: 18, max: 80 }) },
    { name: "Email", generator: () => faker.internet.email() },
    { name: "Country", generator: () => faker.location.country() },
    {
      name: "Balance",
      generator: () =>
        `$${faker.finance.amount({ min: 100, max: 10000, dec: 2 })}`,
    },
    { name: "Job", generator: () => faker.person.jobTitle() },
    { name: "Company", generator: () => faker.company.name() },
    { name: "Phone", generator: () => faker.phone.number() },
    {
      name: "Date",
      generator: () => faker.date.recent().toISOString().split("T")[0],
    },
    { name: "Username", generator: () => faker.internet.userName() },
    { name: "Website", generator: () => faker.internet.url() },
    { name: "Address", generator: () => faker.location.streetAddress() },
    { name: "City", generator: () => faker.location.city() },
    { name: "State", generator: () => faker.location.state() },
    { name: "Zip Code", generator: () => faker.location.zipCode() },
    { name: "Latitude", generator: () => faker.location.latitude() },
    { name: "Longitude", generator: () => faker.location.longitude() },
    { name: "Color", generator: () => faker.color.human() },
    { name: "Animal", generator: () => faker.animal.type() },
  ];
  const numRows = Math.floor(Math.random() * 10) + 10; // At least 10 rows
  const numCols = Math.floor(Math.random() * (columnTypes.length - 3)) + 3; // Between 3 to 7 columns

  // Generate random column names

  // Shuffle and pick random columns
  const shuffledColumns = faker.helpers.shuffle(columnTypes).slice(0, numCols);
  const columns = shuffledColumns.map((col) => col.name);

  // Generate data rows
  const data: {
    [key: string]: string | number;
  }[] = Array.from({ length: numRows }, () => {
    const row: {
      [key: string]: string | number;
    } = {};
    shuffledColumns.forEach((col) => {
      row[col.name] = col.generator();
    });
    return row;
  });

  return { columns, data };
}
