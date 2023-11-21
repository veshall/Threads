import { faker } from "@faker-js/faker";

export const createFakeUser = () => {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    photo: faker.image.avatar(),
    verified: Math.random() > 0.5,
    bio: faker.person.bio(),
    userName: faker.internet.userName(),
    link: faker.internet.url(),

    followers: new Array(Math.floor(Math.random() * 20))
      .fill(null)
      .map((_) => createFakeFollowers()),
  };
};

export const createFakeThread = () => {
  const author = createFakeUser();
  const mentionUser = createFakeUser();

  return {
    id: faker.string.uuid(),
    author,
    content: faker.lorem.paragraph(),
    image: faker.image.urlLoremFlickr({ category: "nature" }),
    replies: new Array(Math.floor(Math.random() * 10)).fill(null).map((_) => ({
      id: faker.string.uuid(),
      author: createFakeUser(),
      content: faker.lorem.sentence(),
      likes: Math.floor(Math.random() * 1000),
      createdAt: faker.date.recent().toISOString(),
    })),

    repliesCount: Math.floor(Math.random() * 100),
    likesCount: Math.floor(Math.random() * 1000),
    mention: Math.random() > 0.5,
    mentionUser,
    createdAt: faker.date.recent().toISOString(),
  };
};

export const createFakeFollowers = () => {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    photo: faker.image.avatar(),
    verfied: Math.random() > 0.5,
    bio: faker.person.bio(),
    userName: faker.internet.userName(),
    link: faker.internet.url(),
    followers: String((Math.random() * 10).toFixed(1) + "M"),
  };
};

export const generateThread = () => {
  return new Array(10).fill(null).map((_) => createFakeThread());
};

export const generateUserSuggestions = () => {
  return new Array(20).fill(null).map((_) => createFakeFollowers());
};
