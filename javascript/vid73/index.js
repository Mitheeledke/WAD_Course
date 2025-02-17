console.log("Generating YouTube-style card...");

function createCard(title, cname, views, monthsOld, duration, thumbnail) {
    let container = document.querySelector(".container");

    // Create card
    let card = document.createElement("div");
    card.classList.add("card");

    // Create thumbnail wrapper
    let thumbWrapper = document.createElement("div");
    thumbWrapper.classList.add("thumbnail");

    let img = document.createElement("img");
    img.src = thumbnail;
    img.alt = "Thumbnail";

    let durationDiv = document.createElement("div");
    durationDiv.classList.add("duration");
    durationDiv.textContent = duration;

    thumbWrapper.appendChild(img);
    thumbWrapper.appendChild(durationDiv);

    // Video Info
    let videoInfo = document.createElement("div");
    videoInfo.classList.add("video-info");

    let titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    titleDiv.textContent = title;

    let metaDiv = document.createElement("div");
    metaDiv.classList.add("meta");

    let cnameSpan = document.createElement("span");
    cnameSpan.classList.add("cname");
    cnameSpan.textContent = cname;

    let viewsSpan = document.createElement("span");
    viewsSpan.classList.add("views");
    viewsSpan.textContent = `${views.toLocaleString()} views`;

    let monthsSpan = document.createElement("span");
    monthsSpan.classList.add("monthsold");
    monthsSpan.textContent = `${monthsOld} months ago`;

    // Append meta info
    metaDiv.appendChild(cnameSpan);
    metaDiv.appendChild(viewsSpan);
    metaDiv.appendChild(monthsSpan);

    videoInfo.appendChild(titleDiv);
    videoInfo.appendChild(metaDiv);

    // Append everything to the card
    card.appendChild(thumbWrapper);
    card.appendChild(videoInfo);

    // Append card to container
    container.appendChild(card);
}

// Example usage
createCard(
    "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
    "CodeWithHarry",
    727000,
    2,
    "31:20",
    "https://i.ytimg.com/vi/CO_DAXswOrc/hq720.jpg"
);
createCard(
    "The New Tiltle",
    "TheNEw Wolrd",
    4349294,
    5,
    "34:23",
    "https://i.ytimg.com/vi/CO_DAXswOrc/hq720.jpg"
    
)