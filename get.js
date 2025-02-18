const apiKey = "pub_69543f94dd45c7de0b2e4c582450c5b6b2041";
const blogContainer = document.getElementById("blog-container");

// const searchfield= document.getElementById("search-input");
// const searchButton= document.getElementById("search-button");

//fetch random news function

async function Leo() {
    try {
        const apiUrl = `https://newsdata.io/api/1/latest?country=in&apikey=${apiKey}&q=technology`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        // console.log(data.results);
        return data.results;

    }
    catch (error) {
        console.error("Error fetching random news", error);
        return [];
    }
}

//fetch news function

function displayBlogs(results) {
    blogContainer.innerHTML = "";
    results.forEach((article) => {
        if (!article) return;
       
        const blogCard = document.createElement("div");
        blogCard.classList.add("card");

        const textDiv = document.createElement("div");
        textDiv.classList.add("txt");

        const img = document.createElement("img");
        img.src = article.image_url;
        img.alt = article.title;
        // console.log(img);
        const title = document.createElement("h3");
        // console.log(title);
        const truncatedTitle = article.title.length > 30 ? article.title.slice(0, 30) + "......" : article.title;
        title.textContent = truncatedTitle;

        const description = document.createElement("p");
        const truncatedDescription = article.description.length > 130 ? article.description.slice(0, 130) + "....." : article.description;
        description.textContent = truncatedDescription;

  blogContainer.appendChild(blogCard);
   
   blogCard.appendChild(img);
   blogCard.appendChild(textDiv);
   textDiv.appendChild(title);
   textDiv.appendChild(description);



    });
}

(async () => {
    try {
        const article = await Leo();

        // console.log(article)
        displayBlogs(article);
        // console.log(displayBlogs(article));
    }
    catch (error) {
        console.log("Error Fetching random news", error);
    }
})();