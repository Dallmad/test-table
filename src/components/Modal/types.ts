import { ReturnComponentType } from 'common';

export type ModalType = {
  showModal: boolean;
  editShowModal: (showModal: boolean) => void;
  children: ReturnComponentType;
};
