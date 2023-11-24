import { BubbleType } from "@/lib/interfaces"

export const comicSteps = [
  "Initiate the comic creation process by clicking the 'Add a comic' button.",
  "Input a prompt to generate an image, laying the foundation for your comic.",
  "Add dialogues and captions to your comic by entering text for the speech bubbles.",
  "Choose from various speech bubble options to suit your preferences.",
  "Arrange and position the speech bubbles freely around your comic card.",
  "Perfect the composition of your comic by fine-tuning the placement.",
  "Delight in the creative process of using the comic creator app."
];


export const bubbleType: BubbleType[] = [
  {
    id: 0,
    val: "Speech bubble pointing left",
    type: "left",
  },
  {
    id: 1,
    val: "Speech bubble pointing right",
    type: "right",
  },
  {
    id: 2,
    val: "Thinking bubble pointing left",
    type: "thinkLeft",
  },
  {
    id: 3,
    val: "Thinking bubble pointing right",
    type: "thinkRight",
  },
];
