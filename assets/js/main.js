document.addEventListener("DOMContentLoaded", loadFullFunctions);
const api_url1 =
  "https://newsapi.org/v2/everything?q=bitcoin&apiKey=c48331c6ab19466d8db12780d436e488";
  const api_url2 =
  "https://newsapi.org/v2/everything?q=apple&from=2024-01-11&to=2024-01-11&sortBy=popularity&apiKey=c48331c6ab19466d8db12780d436e488";
  const api_url3 =
  "https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=c48331c6ab19466d8db12780d436e488";
function loadFullFunctions(e) {
  const newsgriddiv = document.querySelector("#newsgriddiv");

  async function getNewsData() {
    try {
      const response = await fetch(api_url1 || api_url2 || api_url3);
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.log(`ERROR`, error);
    }
  }

  const newsData = getNewsData().then((res) => {
    const data = res.articles;

    data.forEach(async (el) => {
      console.log(el);

      const element = await el;
      const publishedAt = element.publishedAt;
      const date = new Date(publishedAt).toLocaleString()
      console.log(publishedAt);
      newsgriddiv.innerHTML += `
        <div class="border p-2 rounded overflow-hidden w-full">
          <div class="overflow-hidden  border w-full" style="height: 150px;">
            <img
              src="${
                element.urlToImage
                  ? element.urlToImage
                  : "./assets/img/noimg.png"
              }"
              class="max-h-80"
              alt=""
              height="60px"
            />
          </div>
          <div class="flex justify-end mt-1">
            <span class="text-[10px] items-center bg-[#219C90] px-1 rounded text-gray-50">
              Author: ${element.author ? element.author : "Anonymous"}
            </span>
          </div>
          <div class="mt-3">
            <h3 class="uppercase text-xs tracking-wider font-semibold font-Mallanna">
              ${element.title}
            </h3>
            <p class="text-xs mt-2 ml-2 hover:underline">
              <a href="${
                element.url
              }" target="_blank" rel="noopener noreferrer">
                ${
                  element.description
                    ? element.description
                    : "No description provided"
                }
              </a>
            </p>
          </div>
          <div class="text-sm mt-2">
            <h1 class="px-1 text-[9px] items-center capitalize rounded font-semibold">
              publishedAt :
              <span class="text-red-600">${date}</span>
            </h1>
          </div>
        </div>`;
    });
  });
}
