<script setup>
import IconGithub from "./icons/IconGithub.vue";
import IconLink45deg from "./icons/IconLink45deg.vue";
</script>
<template>
  <div
    class="modal fade"
    id="LifeRecordModal"
    tabindex="-1"
    aria-labelledby="LifeRecordModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content overflow-hidden bg-transparent border-0">
        <div class="modal-header border-0 justify-content-center">
          <div class="container">
            <div class="row row-cols-md-2 row-cols-1 g-lg-3 g-md-2 gy-2">
              <div class="col">
                <img class=" img-fluid" src="../assets/img/lr-preview-1.png" alt="">
              </div>
              <div class="col">
                <img class=" w-100 h-100" src="../assets/img/lr-preview-2.png" alt="">
              </div>
              <div class="col">
                <img class=" w-100 h-100" src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjlib21kY244d3VoczkxdmQ3OTEzOGVlNXV2MXM1a3pzNjF0cndrNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MI5xlX5LSP0CD2Br1C/giphy.gif" alt="">
              </div>
              <div class="col">
                <img class=" w-100 h-100" src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTcycW5lczI3eHo4cHQ4ZGRqYmRraTRtZ3pqYnpiZ2F0NHlwbjE1ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RnC0JSwimbgvI3ocTD/giphy.gif" alt="">
              </div>
             
            </div>
          </div>
          <button
            type="button"
            class="btn-close btn-close-white position-absolute"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-bg-light rounded-3">
          <div class="container">
            <div class="flex-column flex-md-row justify-content-between row">
              <div class="col">
                <h2 class="text-secondary fs-5">唱片線上購物官網</h2>
                <h1 class="modal-title mb-md-3" id="LifeRecordModalLabel">
                  生活唱片 Life Record
                </h1>
                <div class="mb-3">
                  <a
                    href="https://github.com/vvayHuang/lifeRecord"
                    class="link-dark me-3 d-inline"
                    target="_blank"
                    ><IconGithub
                  /></a>
                  <a
                    href="https://vvayhuang.github.io/lifeRecord/"
                    class="link-dark me-3"
                    target="_blank"
                    ><IconLink45deg
                  /></a>
                </div>
                <div class="mb-3">
                  <span class="badge rounded-pill text-bg-light text-capitalize"
                    >vite</span
                  >
                  <span class="badge rounded-pill text-bg-light text-capitalize"
                    >bootstrap</span
                  >
                </div>
                <div class="progress-stacked mb-3" style="height: 8px">
                  <div
                    class="progress"
                    role="progressbar"
                    aria-label="Segment one"
                    aria-valuenow="54.7"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 54.7%"
                  >
                    <div class="progress-bar"></div>
                  </div>
                  <div
                    class="progress"
                    role="progressbar"
                    aria-label="Segment two"
                    aria-valuenow="34.2"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 34.2%"
                  >
                    <div class="progress-bar"></div>
                  </div>
                  <div
                    class="progress"
                    role="progressbar"
                    aria-label="Segment three"
                    aria-valuenow="11.0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 11.0%"
                  >
                    <div class="progress-bar"></div>
                  </div>
                  <div
                    class="progress"
                    role="progressbar"
                    aria-label="Segment four"
                    aria-valuenow="0.1"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 0.1%"
                  >
                    <div class="progress-bar"></div>
                  </div>
                </div>
                <ul class="list-unstyled d-inline-flex flex-wrap">
                  <li class="me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      fill="currentColor"
                      class="bi bi-circle-fill me-2"
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                    <span class="text-muted me-1 text-uppercase">html</span>
                    <span class="text-muted ms-md-1 me-md-1">54.7%</span>
                  </li>
                  <li class="me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      fill="currentColor"
                      class="bi bi-circle-fill me-2"
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                    <span class="text-muted me-1 text-uppercase">css</span>
                    <span class="text-muted ms-md-1 me-md-1">34.2%</span>
                  </li>
                  <li class="me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      fill="currentColor"
                      class="bi bi-circle-fill me-2"
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                    <span class="text-muted me-1 text-uppercase">SCSS</span>
                    <span class="text-muted ms-md-1 me-md-1">11.0%</span>
                  </li>
                  <li class="me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      fill="currentColor"
                      class="bi bi-circle-fill me-2"
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                    <span class="text-muted ms-1 me-1">JavaScript</span>
                    <span class="text-muted ms-md-1 me-md-1">0.1%</span>
                  </li>
                </ul>
              </div>
              <div class="col">
               <div class=" d-flex flex-column h-100">
                  <p>
                    生活唱片 Life Record 是我設計的一個虛構的唱片網站，專為音樂愛好者量身打造。在這個作品中，結合了音樂元素與現代化的設計風格，創造了一個既充滿活力又專業的音樂平台。網站中展示了專輯資訊、音樂人介紹，以及購買和收聽音樂的功能，旨在為用戶提供一個流暢的互動體驗。這個作品想展現了我在網頁設計和UI/UX上的實力，也體現了我對音樂文化的熱情與理解。
                  </p>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
span {
  font-size: 12px;
}
.btn-close {
  top: 4%;
  left: 1%;
}
.progress[aria-label="Segment one"] .progress-bar {
  background-color: #E34C26;
}

.progress[aria-label="Segment two"] .progress-bar {
  background-color: #553D7C;
}

.progress[aria-label="Segment three"] .progress-bar {
  background-color: #C6538C;
}

.progress[aria-label="Segment four"] .progress-bar {
  background-color: #F1E05B;
}

li:nth-of-type(1) .bi-circle-fill {
  fill: #E34C26;
}

li:nth-of-type(2) .bi-circle-fill {
  fill: #553D7C;
}

li:nth-of-type(3) .bi-circle-fill {
  fill: #C6538C;
}

li:nth-of-type(4) .bi-circle-fill {
  fill: #F1E05B;
}
.modal{
  backdrop-filter: blur(20px);
}
</style>
