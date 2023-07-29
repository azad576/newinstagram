const forms = document.getElementById(`forms`);
const msg = document.querySelector(`.msg`);
const all_post = document.querySelector(`.all_post`);
//show form data

const showdata = () => {
  const all_postdata = getdat(`post`);
  let content = ``;
  if (all_postdata.length > 0) {
    all_postdata.map((item, index) => {
      content += `

      <div class="main_sidbar">
      <div class="main_midle">
        <div class="midle_left">
          <img src="${item.auth_photo}" alt="" />
          <span><a href="">${item.auth_names}</a></span>
          <span>. 20h</span>
          <span class="follow"><a href="">. Follow</a></span>
        </div>
        <div class="midle_right">
          <a href=""
            ><svg
              aria-label="More options"
              class="_ab6-"
              color="rgb(0, 0, 0)"
              fill="rgb(0, 0, 0)"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <circle cx="12" cy="12" r="1.5"></circle>
              <circle cx="6" cy="12" r="1.5"></circle>
              <circle cx="18" cy="12" r="1.5"></circle></svg
          ></a>
        </div>
      </div>

      <div class="post_img">
        <img src="${item.post_photo}" alt="" />
      </div>
      <div class="post_icon">
        <div class="icon_left">
          <ul>
            <li>
              <a href=""
                ><svg
                  aria-label="Like"
                  class="x1lliihq x1n2onr6"
                  color="rgb(38, 38, 38)"
                  fill="rgb(38, 38, 38)"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>Like</title>
                  <path
                    d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"
                  ></path></svg
              ></a>
            </li>
            <li>
              <a href=""
                ><svg
                  aria-label="Comment"
                  class="x1lliihq x1n2onr6"
                  color="rgb(0, 0, 0)"
                  fill="rgb(0, 0, 0)"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>Comment</title>
                  <path
                    d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path></svg
              ></a>
            </li>
            <li>
              <a href=""
                ><svg
                  aria-label="Share Post"
                  class="x1lliihq x1n2onr6"
                  color="rgb(0, 0, 0)"
                  fill="rgb(0, 0, 0)"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>Share Post</title>
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="22"
                    x2="9.218"
                    y1="3"
                    y2="10.083"
                  ></line>
                  <polygon
                    fill="none"
                    points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></polygon></svg
              ></a>
            </li>
          </ul>
          <div class="like">
            <li><a href="">3,778,546 likes</a></li>
            <li>
              ${item.post_content}
            </li>
            <li>View all 17,396 comments</li>
          </div>
        </div>
        <div class="icon_right">
          <li>
            <a href=""
              ><svg
                aria-label="Save"
                class="x1lliihq x1n2onr6"
                color="rgb(0, 0, 0)"
                fill="rgb(0, 0, 0)"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Save</title>
                <polygon
                  fill="none"
                  points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></polygon></svg
            ></a>
          </li>
        </div>
      </div>
    </div>
`;
    });
  } else {
    content = `<h2>No Post Found</h2>`;
  }
  all_post.innerHTML = content;
};
showdata();
forms.addEventListener(`submit`, (e) => {
  e.preventDefault();

  const allforms = new FormData(e.target);
  const data = Object.fromEntries(allforms.entries());
  console.log(data);
  if (
    !data.auth_names ||
    !data.auth_photo ||
    // !data.post_photo ||
    !data.post_content
  ) {
    msg.innerHTML = createalert(`all feild are must be required`, `danger`);
  } else {
    sendata(`post`, data);

    e.target.reset();
    showdata();
  }
});
