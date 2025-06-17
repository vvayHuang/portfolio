<template>
  <footer>
    <div class="container">
      <div class="row justify-content-lg-end justify-content-md-center">
        <div class="col-auto">
          <div class="progress-stacked mb-3" style="height: 8px">
            <div
              class="progress"
              role="progressbar"
              aria-label="Segment one"
              aria-valuenow="30"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: 30%"
            >
              <div class="progress-bar"></div>
            </div>
            <div
              class="progress"
              role="progressbar"
              aria-label="Segment two"
              aria-valuenow="30"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: 30%"
            >
              <div class="progress-bar"></div>
            </div>
            <div
              class="progress"
              role="progressbar"
              aria-label="Segment three"
              aria-valuenow="30"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: 30%"
            >
              <div class="progress-bar"></div>
            </div>
            <div
              class="progress"
              role="progressbar"
              aria-label="Segment four"
              aria-valuenow="10"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: 10%"
            >
              <div class="progress-bar"></div>
            </div>
          </div>
          <span class="text-muted me-3 d-inline-flex">© 2025 vvayHuang</span>
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
              <span class="text-muted me-1">coding&design</span>
              <span class="text-muted ms-md-1 me-md-1">30%</span>
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
              <span class="text-muted me-1">basketball</span>
              <span class="text-muted ms-md-1 me-md-1">30%</span>
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
              <span class="text-muted me-1">music</span>
              <span class="text-muted ms-md-1 me-md-1">30%</span>
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
              <span class="text-muted ms-1 me-1">sleeping</span>
              <span class="text-muted ms-md-1 me-md-1">10%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
span {
  font-size: 12px;
}
.container {
  margin-top: 24px;
  margin-bottom: 80px;
}
.progress[aria-label='Segment one'] .progress-bar {
  background-color: var(--bs-gray-800);
}

.progress[aria-label='Segment two'] .progress-bar {
  background-color: var(--bs-gray-700);
}

.progress[aria-label='Segment three'] .progress-bar {
  background-color: var(--bs-gray-600);
}

.progress[aria-label='Segment four'] .progress-bar {
  background-color: var(--bs-gray-500);
}

li:nth-of-type(1) .bi-circle-fill {
  fill: var(--bs-gray-800);
}

li:nth-of-type(2) .bi-circle-fill {
  fill: var(--bs-gray-700);
}

li:nth-of-type(3) .bi-circle-fill {
  fill: var(--bs-gray-600);
}

li:nth-of-type(4) .bi-circle-fill {
  fill: var(--bs-gray-500);
}
</style>
