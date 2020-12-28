import Vue from "vue";
import { PropColours } from "./props";

export declare class StarRate extends Vue {
  name: string;
  title?: string;
  modelValue?: integer;
  maxAmount?: integer;
  colours?: PropColours;
}
