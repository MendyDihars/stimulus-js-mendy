import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "output" ]

  change() {
    this.outputTarget.classList.toggle('blue');
  }
}
