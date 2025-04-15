export const getRandomTenQuestions = (question) => {
  if (!Array.isArray(question)) return [];
  const shuffled = [...question].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 10);
};
