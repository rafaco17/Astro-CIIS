interface Speaker {
    name_speaker: string;
    lastname_speaker: string;
    nationality_speaker: string;
    dir_img_speaker: string;
    about_profile_speaker: string;
}

export default interface Props {
  name: string;
  price: string;
  tickets: number;
  avaible: number;
  description: string;
  img: string;
  link: string;
  start: string,
  end: string,
  place: string,
  is_morning: boolean,
  relatedSpeaker: number,
  relatedEvent: number,
  speaker: Speaker
}

