export function getSearchId() {
  return fetch("https://aviasales-test-api.kata.academy/search")
    .then((response) => response.json())
    .catch((err) => {
      console.error(err);
    });
}

export function getTickets(id: string) {
  return fetch(
    `https://aviasales-test-api.kata.academy/tickets?searchId=${id}&size=5`
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
}
