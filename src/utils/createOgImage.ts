const cloudinaryId = process.env.NEXT_PUBLIC_CLOUDINARY_ID;

const e = (str: string) => encodeURIComponent(encodeURIComponent(str));

const createOgImage = ({
  title,
  meta,
  bgImage,
}: {
  title: string;
  meta: string;
  bgImage: string;
}) => {
  return [
    // ACCOUNT PREFIX
    // Add your own Cloudinary account ID.
    `https://res.cloudinary.com/${cloudinaryId}/image/upload`,
    // Composed Image Transformations
    `w_400,h_236,q_100`,

    // TITLE
    // Karla google font in light rose
    `l_text:Karla_20_bold:${e(title)},co_rgb:ffe4e6,c_fit,w_200,h_70`,
    // Positioning
    `fl_layer_apply,g_south_west,x_40,y_75`,

    // META
    // Karla, but smaller
    `l_text:Karla_12:${e(meta)},co_rgb:ffe4e680,c_fit,w_200,h_40`,
    // Positioning
    `fl_layer_apply,g_south_west,x_40,y_40`,

    // PROFILE IMAGE
    // upload your github avatar to your cloudinary account with the following name
    `l_github_avatar`,
    // Transformations
    `c_thumb,g_face,r_max,w_70,h_70,q_100`,
    // Positioning
    `fl_layer_apply,w_40,g_north_west,x_25,y_25`,

    // BG
    `builds/${bgImage}`,
  ].join("/");
};

export default createOgImage;
