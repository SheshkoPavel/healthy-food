import { Stack as StackStack } from 'contentstack';
import { getAvailabelItems } from '@/utils';

const Stack: any = StackStack({
  api_key: process.env.CONTENTSTACK_API_KEY,
  delivery_token: process.env.DELIVERY_TOKEN,
  environment: process.env.ENVIRONMENT,
  live_preview: {
    host: 'api.contentstack.io',
    management_token: process.env.LIVE_PREVIEW_MANAGEMENT_TOKEN,
    enable: true,
  },
});

Stack.setHost("api.contentstack.io")

const getPageData = async (content_type_uid: string, uid: string) => {
  let content: any[] = [];

  const Query = Stack
    .ContentType(content_type_uid)
    .Entry(uid)
    .includeReference([
      'footer',
      'footer.main_content.two_column_navigation.column_1.links',
      'footer.main_content.two_column_navigation.column_2.links',
      'footer.utility_navigation',
      'header',
      'header.account_navigation.links',
      'header.primary_navigation.links',
      'header.secondary_navigation.items.link',
      'header.secondary_navigation.items.sub_links',
      'header.secondary_navigation.items.sub_links_with_images.sub_links',
      'main_content.featured.items',
      'main_content.featured.items.categories',
      'main_content.featured.cta',
      'main_content.club_contact.item',
      'main_content.quote.item',
      'main_content.two_column_entry_summaries.summary_items',
      'main_content.two_column_entry_summaries.cta',
      'main_content.two_column_entry_summaries.link',
      'main_content.two_column_summaries_with_carousel.cta',
      'main_content.two_column_summaries_with_carousel.link',
      'main_content.two_column_summaries_with_carousel.carousel',
      'main_content.two_column_summaries_with_carousel.summary_items',
      'main_content.filtered_entry_summary_list.categories',
      'main_content.cross_linked_content',
      'main_content.cross_linked_content.item',
      'main_content.cross_linked_content.cta',
      'main_content.cross_linked_content.cta.link',
      'overview.hero',
      'overview.hero.hero',
      'overview.hero.mosaic_image',
      // 'categories',

      // t1 public facing page
      'overview.carousel_with_video',
      'main_content.two_column.link',
      'main_content.two_column.link_copy',
      'main_content.tabbed.link',
      'main_content.mosaic_carousel.mosaic_carousel',
      'main_content.featured.cta.link',

      // t2
      'main_content.cross_linked_content.items',
      'main_content.two_column.column_1.items',
      'main_content.two_column.column_2.items',
      'main_content.two_column.cta',

      // t4
      'main_content.filtered_entry_summary_list.cta',

      // t5
      'main_content.schedule.contact_person',
      'main_content.schedule.files',
      'main_content.schedule.cta',
      'main_content.schedule.cta.link',
      'main_content.schedule.links',
      'main_content.staff.items',
      'main_content.two_column.column_1.link',
      'main_content.two_column.column_1.files',
      'main_content.two_column.column_2.items',
      'main_content.one_row.items',
      'main_content.two_column_with_cta.column_1.items',
      'main_content.two_column_with_cta.column_2.items',
      'main_content.two_column_with_cta.cta',

      // t6
      'main_content.contact_information.item',
      'main_content.image_with_text.files',
      'main_content.image_with_text.cta',
      'main_content.image_with_text.cta.link',
      'main_content.image_with_text.sub_files',
      'main_content.image_with_text.sub_cta',
      'main_content.image_with_text.sub_cta.link',
      'main_content.tabbed.tabs.content.files',
      'main_content.tabbed.tabs.content.cta',
      'main_content.tabbed.tabs.content.cta.link',

      // t7
      'details_page',

      // t8
      'back_link',

      // t13
      'overview.categories',
      'main_content.contact_information.carousel',
      'main_content.contact_information.cta',
      'main_content.menu.menu_content.featured.items',
      'main_content.menu.menu_content.big_size_cards.items',
      'main_content.menu.menu_content.mixed_size_cards.items',
      'main_content.menu.menu_content.mixed_size_cards.items.categories',
      'main_content.menu.menu_content.small_size_cards.items',
      'main_content.menu.menu_content.small_size_cards.items.categories',
      'main_content.menu.menu_content.small_size_cards_without_images.items',
      'main_content.menu.menu_content.small_size_cards_without_images.items.categories',

      // t15
      'overview.items.cta',
      'overview.items.cta.link',
      'main_content.quick_links.links',
      'main_content.quick_links.crowd_meter_link',
      'main_content.events.column_1.link',
      'main_content.events.column_1.cta',
      'main_content.events.column_1.cta.link',
      'main_content.events.column_2.link',
      'main_content.mixed.mixed_content.featured.items',
      'main_content.mixed.mixed_content.featured.dropdown_items',

      'main_content.mixed.mixed_content.tabs.tabs.items',
      'main_content.mixed.mixed_content.tabs.tabs.items.categories',
      'main_content.mixed.mixed_content.tabs.tabs.view_all_link',

      'main_content.mixed.mixed_content.galleries.view_all_link',
      'main_content.mixed.mixed_content.galleries.galleries_reference',

      'main_content.mixed.mixed_content.news.view_all_link',
    ])
    .only('main_content.featured.items.categories', [
      'title',
    ])
    .only('main_content.two_column_entry_summaries.summary_items.categories', [
      'title',
    ])
    .only('main_content.two_column_summaries_with_carousel.summary_items.categories', [
      'title',
    ])
    .only('main_content.contact_information.item', [
      'name',
      'photo',
      'role',
      'email_address',
      'phone_number',
      'tags',
      'mailing_address',
    ])
    .only('overview.categories', [
      'title',
    ])
    .only('main_content.menu.menu_content.mixed_size_cards.items.categories', [
      'title',
    ])
    .only('details_page', [
      'url',
    ])
    .only('clubs_page', [
      'url',
    ])
    .only('main_content.mixed.mixed_content.tabs.tabs.items.categories', [
      'title',
    ])
  // .toJSON()

  await Query.fetch()
    .then(function success(entry: any) {
      content = entry.toJSON();
    }, function error(err: any) {
      // err object
    });

  return content;
};

const getContentstackContent = async (contentType: string, entry: string) => {
  let content: any[] = [];

  const Query = Stack.ContentType(contentType).Entry(entry);
  await Query.fetch()
    .then(function success(entry: any) {
      content = entry.toJSON();
    }, function error(err: any) {
      // err object
    });

  return content;
};

const getContentstackContentByUrl = async (content_type_uid: string, url: string) => {
  let content: any[] = [];

  const Query = Stack.ContentType(content_type_uid).Query()
    .where('url', `${url}`)
    .includeReference([
      'footer',
      'footer.main_content.two_column_navigation.column_1.links',
      'footer.main_content.two_column_navigation.column_2.links',
      'footer.utility_navigation',
      'header',
      'header.account_navigation.links',
      'header.primary_navigation.links',
      'header.secondary_navigation.items.link',
      'header.secondary_navigation.items.sub_links',
      'header.secondary_navigation.items.sub_links_with_images.sub_links',
      'main_content.featured.items',
      'main_content.featured.items.categories',
      'main_content.featured.cta',
      'main_content.club_contact.item',
      'main_content.quote.item',
      'main_content.two_column_entry_summaries.summary_items',
      'main_content.two_column_entry_summaries.cta',
      'main_content.two_column_entry_summaries.link',
      'main_content.two_column_summaries_with_carousel.cta',
      'main_content.two_column_summaries_with_carousel.link',
      'main_content.two_column_summaries_with_carousel.carousel',
      'main_content.two_column_summaries_with_carousel.summary_items',
      'main_content.filtered_entry_summary_list.categories',
      'main_content.cross_linked_content',
      'main_content.cross_linked_content.item',
      'main_content.cross_linked_content.cta',
      'main_content.cross_linked_content.cta.link',
      'overview.hero',
      'overview.hero.hero',
      'overview.hero.mosaic_image',
      // 'categories',

      // t1 public facing page
      'overview.carousel_with_video',
      'main_content.two_column.link',
      'main_content.two_column.link_copy',
      'main_content.tabbed.link',
      'main_content.mosaic_carousel.mosaic_carousel',
      'main_content.featured.cta.link',

      // t2
      'main_content.cross_linked_content.items',
      'main_content.two_column.column_1.items',
      'main_content.two_column.column_2.items',
      'main_content.two_column.cta',

      // t4
      'main_content.filtered_entry_summary_list.cta',

      // t5
      'main_content.schedule.contact_person',
      'main_content.schedule.files',
      'main_content.schedule.cta',
      'main_content.schedule.cta.link',
      'main_content.schedule.links',
      'main_content.staff.items',
      'main_content.two_column.column_1.link',
      'main_content.two_column.column_1.files',
      'main_content.two_column.column_2.items',
      'main_content.one_row.items',
      'main_content.two_column_with_cta.column_1.items',
      'main_content.two_column_with_cta.column_2.items',
      'main_content.two_column_with_cta.cta',

      // t6
      'main_content.contact_information.item',
      'main_content.image_with_text.files',
      'main_content.image_with_text.cta',
      'main_content.image_with_text.cta.link',
      'main_content.image_with_text.sub_files',
      'main_content.image_with_text.sub_cta',
      'main_content.image_with_text.sub_cta.link',
      'main_content.tabbed.tabs.content.files',
      'main_content.tabbed.tabs.content.cta',
      'main_content.tabbed.tabs.content.cta.link',

      // t7
      'details_page',

      // t8
      'back_link',

      // t13
      'overview.categories',
      'main_content.contact_information.carousel',
      'main_content.contact_information.cta',
      'main_content.menu.menu_content.featured.items',
      'main_content.menu.menu_content.big_size_cards.items',
      'main_content.menu.menu_content.mixed_size_cards.items',
      'main_content.menu.menu_content.mixed_size_cards.items.categories',
      'main_content.menu.menu_content.small_size_cards.items',
      'main_content.menu.menu_content.small_size_cards.items.categories',
      'main_content.menu.menu_content.small_size_cards_without_images.items',
      'main_content.menu.menu_content.small_size_cards_without_images.items.categories',

      // t15
      'overview.items.cta',
      'overview.items.cta.link',
      'main_content.quick_links.links',
      'main_content.quick_links.crowd_meter_link',
      'main_content.events.column_1.link',
      'main_content.events.column_1.cta',
      'main_content.events.column_1.cta.link',
      'main_content.events.column_2.link',
      'main_content.mixed.mixed_content.featured.items',
      'main_content.mixed.mixed_content.featured.dropdown_items',

      'main_content.mixed.mixed_content.tabs.tabs.items',
      'main_content.mixed.mixed_content.tabs.tabs.items.categories',
      'main_content.mixed.mixed_content.tabs.tabs.view_all_link',

      'main_content.mixed.mixed_content.galleries.view_all_link',
      'main_content.mixed.mixed_content.galleries.galleries_reference',

      'main_content.mixed.mixed_content.news.view_all_link',
    ])
    .only('main_content.featured.items.categories', [
      'title',
    ])
    .only('main_content.two_column_entry_summaries.summary_items.categories', [
      'title',
    ])
    .only('main_content.two_column_summaries_with_carousel.summary_items.categories', [
      'title',
    ])
    // .only('header.account_navigation.links', linkProperties)
    // .only('header.primary_navigation.links', linkProperties)
    // .only('header.secondary_navigation.items.sub_links', linkProperties)
    // .only('header.secondary_navigation.items.sub_links_with_images.sub_links', linkProperties)
    // .only('main_content.featured.items', linkProperties)
    // .only('main_content.two_column_summaries_with_carousel.summary_items', linkProperties)
    // .only('main_content.two_column_entry_summaries.summary_items', linkProperties)

    .only('main_content.contact_information.item', [
      'name',
      'photo',
      'role',
      'email_address',
      'phone_number',
      'tags',
      'mailing_address',
    ])
    .only('overview.categories', [
      'title',
    ])
    .only('main_content.menu.menu_content.mixed_size_cards.items.categories', [
      'title',
    ])
    .only('details_page', [
      'url',
    ])
    .only('clubs_page', [
      'url',
    ])
    .only('main_content.mixed.mixed_content.tabs.tabs.items.categories', [
      'title',
    ])
    .toJSON()
    .find()

  await Query
    .then(function success(entry: any) {
      content = entry[0].map((elem: any) => {
        return { ...elem, content_type_uid }
      });
      if (!content) {
        // throw new Error('Not found')
      }

    }, function error(err: any) {
      // err object
    });

  return content;
};



const getPageEntityUsingSDK = (urlWithQuery: string, isAuthorized: boolean) => {
  const url = (urlWithQuery || '').split('?')[0]

  return Promise.all([
    getContentstackContentByUrl('page_type_1', url),
    getContentstackContentByUrl('page_type_2', url),
  ])
    .then((res) => {
      const result = res.reduce((acc, el) => {
        return [...acc, ...el]
      }, [])

      const data = getAvailabelItems(result, (page: any) => {
        return page.audience.type
      }, isAuthorized);

      if (result.length === 0) {
        return {
          error: {
            message: 'Page does not exist',
            data,
          }
        }
      }

      if (result.length !== 0 && data.length === 0) {
        return {
          error: {
            message: 'You do not have permission to see this page',
            status: 401,
            data,
          }
        }
      }

      return {
        data
      }

    })
}

export {
  getContentstackContent,
  getPageData,
  getPageEntityUsingSDK,
  Stack,
};
