import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home/Home.vue";
import JobsListing from "../views/JobsListing/JobsListing.vue";
import JobDetails from "../views/JobDetails/JobDetails.vue";
import AddJob from "../views/AddJob/AddJob.vue";
import EditJob from "../views/EditJob/EditJob.vue";
import NotFound from "@/views/NotFound/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/jobs",
      name: "jobs-listing",
      component: JobsListing,
    },
    {
      path: "/jobs/:id",
      name: "job-details",
      component: JobDetails,
    },
    {
      path: "/jobs/add",
      name: "add-job",
      component: AddJob,
    },
    {
      path: "/jobs/edit",
      name: "edit-job",
      component: EditJob,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;
