import { factory } from "./factory";

let count = factory(0, 1);

function update_count_and_reset_counter() {

update_count();

  current_count.value = 0;
  
}

const start_at_control = document.getElementById(
  "start_at",
) as HTMLInputElement;

const step_control = document.getElementById("step") as HTMLInputElement;

start_at_control?.addEventListener("change", () => {

  current_count.value = factory(start_at_control.value,step_control.value);
});

step_control?.addEventListener("change", () => {

  current_count.value = factory(start_at_control.value,step_control.value);
});

const count_button = document.querySelector(
  ".count_button",
) as HTMLButtonElement;

const current_count = document.querySelector(
  ".current_count",
) as HTMLSpanElement;

function update_count() {

  current_count.value = factory(start_at_control.value,step_control.value);

}

count_button.addEventListener("click", update_count);
