let posts = [
  { id: 1, title: "첫 글", content: "프론트엔드 CRUD를 구현해봅시다." },
  { id: 2, title: "공지사항", content: "수정/삭제 버튼을 눌러보세요." },
];

let nextId = 3;

const addBtn = document.getElementById("add-btn");
const inputTitle = document.getElementById("input-title");
const inputContent = document.getElementById("input-content");
const postList = document.getElementById("post-list");

// C (Create)
function createPost() {
  // 새 게시글 객체
  const newPost = {
    id: nextId++,
    title: inputTitle.value,
    content: inputContent.value,
  };

  // 배열에 추가
  posts.push(newPost);
  console.log({ posts });

  renderPosts();
}

// R (Read)
function renderPosts() {
  // posts 배열을 순회하여 postList에 게시글 목록 HTML을 생성/삽입하고, 각 게시글의 수정/삭제 버튼에 이벤트 리스너를 연결합니다.

  // 렌더시마다 렌더전에 초기화
  postList.innerHTML = "";

  posts.forEach((post) => {
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const updateButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    // 내용넣기
    h1.textContent = post.title;
    p.textContent = post.content;
    updateButton.textContent = "수정";
    deleteButton.textContent = "삭제";

    // 이벤트걸어주고
    updateButton.addEventListener("click", () => enterEditMode(li, post));
    deleteButton.addEventListener("click", () => deletePost(post.id));

    // 붙이기
    li.appendChild(h1);
    li.appendChild(p);
    li.appendChild(updateButton);
    li.appendChild(deleteButton);

    // 리스트아이템추가하기
    postList.appendChild(li);
  });
}

// U (Update)
function enterEditMode(listItem, post) {
  listItem.innerHTML = "";

  const titleInput = document.createElement("input");
  const contentInput = document.createElement("input");
  const saveButton = document.createElement("button");
  const cancelButton = document.createElement("button");

  // 리스트아이템에 내용추가
  titleInput.value = post.title;
  contentInput.value = post.content;
  saveButton.textContent = "저장";
  cancelButton.textContent = "취소";

  // 저장 및 취소 이벤트추가
  saveButton.addEventListener("click", () =>
    updatePost(post.id, titleInput.value, contentInput.value)
  );
  cancelButton.addEventListener("click", () => exitEditMode(listItem));

  // 리스트아이템에 붙이기
  listItem.appendChild(titleInput);
  listItem.appendChild(contentInput);
  listItem.appendChild(saveButton);
  listItem.appendChild(cancelButton);
}

function exitEditMode(listItem) {
  renderPosts();
}

function updatePost(id, title, content) {
  posts = posts.map((post) => {
    if (post.id === id) {
      return { ...post, title, content };
    } else {
      return post;
    }
  });
  // console.log({ id, listItem });
  console.log({ posts });

  renderPosts();
}

// D (Delete)
function deletePost(id) {
  posts = posts.filter((post) => post.id !== id);
  renderPosts();
}

// 생성
addBtn.addEventListener("click", (e) => {
  createPost();
});

renderPosts();
