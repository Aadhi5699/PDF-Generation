function DateFinder() {
  const today = new Date();
  const dayOfMonth = today.getDate(); // Returns 1-31
  return dayOfMonth === 1 || dayOfMonth === 2;
}
