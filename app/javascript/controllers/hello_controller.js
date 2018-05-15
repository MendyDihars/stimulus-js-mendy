import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ 'body', 'name', 'open', 'form']

  showButton() {
    this.openTarget.classList.toggle('hidden');
    this.formTarget.classList.toggle('hidden');
  }

  submit(event) {
    event.preventDefault
    this.bodyTarget.style.background = this.nameTarget.value;
    this.showButton()
  }
}
