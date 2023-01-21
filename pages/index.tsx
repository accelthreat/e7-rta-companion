import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { sample_games, RtaMatch, character_options } from "@/data/sample_data";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { use, useEffect, useState } from "react";
import { CharacterPicker, FormValues } from "@/components/character_picker";

type HomeProps = {
  matches: RtaMatch[];
};

export async function getServerSideProps() {
  return {
    props: {
      matches: sample_games,
    },
  };
}

export default function Home({ matches }: HomeProps) {
  const { control, register, watch } = useForm<FormValues>({
    defaultValues: {
      first_pick: true,
      prebans: [],
      pick_zero: "",
      pick_one: "",
      pick_two: "",
      pick_three: "",
      pick_four: "",
      pick_five: "",
      pick_six: "",
      pick_seven: "",
      pick_eight: "",
      pick_nine: "",
    },
  });

  const watchPrebans = watch("prebans");
  const watchPickZero = watch("pick_zero");
  const watchPickOne = watch("pick_one");
  const watchPickTwo = watch("pick_two");
  const watchPickThree = watch("pick_three");
  const watchPickFour = watch("pick_four");
  const watchPickFive = watch("pick_five");
  const watchPickSix = watch("pick_six");
  const watchPickSeven = watch("pick_seven");
  const watchPickEight = watch("pick_eight");
  const watchPickNine = watch("pick_nine");
  const watchFirstPick = watch("first_pick");

  const [recommendations, setRecommendations] = useState<string[]>([]);

  useEffect(() => {
    const subscription = watch((currentMatch) => {
      const same_preban = matches.filter((match) => {
        //console.log(match.prebans, value.prebans);
        return (
          match.prebans.sort().toString() ===
          currentMatch.prebans?.sort().toString()
        );
      });
      console.log(same_preban);
      const same_starting_picks = same_preban.filter((match) => {
        if (currentMatch.first_pick) {
          if (!match.first_pick) {
            [
              match.picks[0],
              match.picks[1],
              match.picks[2],
              match.picks[3],
              match.picks[4],
              match.picks[5],
              match.picks[6],
              match.picks[7],
              match.picks[8],
              match.picks[9],
            ] = [
              match.picks[5],
              match.picks[6],
              match.picks[7],
              match.picks[8],
              match.picks[9],
              match.picks[0],
              match.picks[1],
              match.picks[2],
              match.picks[3],
              match.picks[4],
            ];
          }
          return (
            (currentMatch.pick_zero === match.picks[0] ||
              currentMatch.pick_zero === "") &&
            (currentMatch.pick_one === match.picks[1] ||
              currentMatch.pick_one === match.picks[2] ||
              currentMatch.pick_one === "") &&
            (currentMatch.pick_two === match.picks[2] ||
              currentMatch.pick_two === match.picks[1] ||
              currentMatch.pick_two === "") &&
            (currentMatch.pick_three === match.picks[3] ||
              currentMatch.pick_three === match.picks[4] ||
              currentMatch.pick_three === "") &&
            (currentMatch.pick_four === match.picks[4] ||
              currentMatch.pick_four === match.picks[3] ||
              currentMatch.pick_four === "") &&
            (currentMatch.pick_five === match.picks[5] ||
              currentMatch.pick_five === match.picks[6] ||
              currentMatch.pick_five === "") &&
            (currentMatch.pick_six === match.picks[6] ||
              currentMatch.pick_six === match.picks[5] ||
              currentMatch.pick_six === "") &&
            (currentMatch.pick_seven === match.picks[7] ||
              currentMatch.pick_seven === match.picks[8] ||
              currentMatch.pick_seven === "") &&
            (currentMatch.pick_eight === match.picks[8] ||
              currentMatch.pick_eight === match.picks[7] ||
              currentMatch.pick_eight === "") &&
            (currentMatch.pick_nine === match.picks[9] ||
              currentMatch.pick_nine === "")
          );
        } else {
          if (match.first_pick) {
            [
              match.picks[0],
              match.picks[1],
              match.picks[2],
              match.picks[3],
              match.picks[4],
              match.picks[5],
              match.picks[6],
              match.picks[7],
              match.picks[8],
              match.picks[9],
            ] = [
              match.picks[5],
              match.picks[6],
              match.picks[7],
              match.picks[8],
              match.picks[9],
              match.picks[0],
              match.picks[1],
              match.picks[2],
              match.picks[3],
              match.picks[4],
            ];
          }
          return (
            (currentMatch.pick_zero === match.picks[0] ||
              currentMatch.pick_zero === match.picks[1] ||
              currentMatch.pick_zero === "") &&
            (currentMatch.pick_one === match.picks[1] ||
              currentMatch.pick_one === match.picks[0] ||
              currentMatch.pick_one === "") &&
            (currentMatch.pick_two === match.picks[2] ||
              currentMatch.pick_two === match.picks[3] ||
              currentMatch.pick_two === "") &&
            (currentMatch.pick_three === match.picks[3] ||
              currentMatch.pick_three === match.picks[2] ||
              currentMatch.pick_three === "") &&
            (currentMatch.pick_four === match.picks[4] ||
              currentMatch.pick_four === "") &&
            (currentMatch.pick_five === match.picks[5] ||
              currentMatch.pick_five === "") &&
            (currentMatch.pick_six === match.picks[6] ||
              currentMatch.pick_six === match.picks[7] ||
              currentMatch.pick_six === "") &&
            (currentMatch.pick_seven === match.picks[7] ||
              currentMatch.pick_seven === match.picks[6] ||
              currentMatch.pick_seven === "") &&
            (currentMatch.pick_eight === match.picks[8] ||
              currentMatch.pick_eight === match.picks[9] ||
              currentMatch.pick_eight === "") &&
            (currentMatch.pick_nine === match.picks[9] ||
              currentMatch.pick_nine === match.picks[8] ||
              currentMatch.pick_nine === "")
          );
        }
      });
      console.log("Same starting picks", same_starting_picks);
      console.log(currentMatch);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            {/* <Link
              href={"match_history"}
              className="text-3xl font-bold underline"
            >
              Click to view matches
            </Link> */}
            <h1 className="text-3xl font-bold">RTA Draft</h1>
            <div>
              <form className="flex flex-col items-start gap-y-2">
                <label>First Pick</label>
                <input type={"checkbox"} {...register("first_pick")}></input>
                <label>Prebans: </label>
                <div className="w-full">
                  <Controller
                    control={control}
                    name="prebans"
                    render={({ field: { onChange, value, ref } }) => (
                      <Select
                        onChange={(prebans) => {
                          onChange(
                            prebans.map((preban) => {
                              return preban.value;
                            })
                          );
                        }}
                        value={value.map((value) => {
                          return { value: value, label: value };
                        })}
                        ref={ref}
                        isMulti
                        options={character_options}
                        styles={{
                          option: (styles, { isDisabled }) => {
                            return {
                              ...styles,
                              backgroundColor: isDisabled ? "red" : "white",
                              color: "black",
                              cursor: isDisabled ? "not-allowed" : "default",
                            };
                          },
                        }}
                      ></Select>
                    )}
                  ></Controller>
                </div>
                <label>Picks: </label>
                <div className="flex w-full gap-x-2">
                  <div className="basis-1/2 flex flex-col gap-y-2">
                    <CharacterPicker
                      control={control}
                      name="pick_zero"
                      excluded={[
                        ...watchPrebans,
                        watchPickOne,
                        watchPickTwo,
                        watchPickThree,
                        watchPickFour,
                        watchPickFive,
                        watchPickSix,
                        watchPickSeven,
                        watchPickEight,
                        watchPickNine,
                      ]}
                      disabled={!watchFirstPick && watchPickFive === ""}
                    ></CharacterPicker>
                    <CharacterPicker
                      control={control}
                      name="pick_one"
                      excluded={[
                        ...watchPrebans,
                        watchPickZero,
                        watchPickTwo,
                        watchPickThree,
                        watchPickFour,
                        watchPickFive,
                        watchPickSix,
                        watchPickSeven,
                        watchPickEight,
                        watchPickNine,
                      ]}
                      disabled={
                        (watchFirstPick &&
                          (watchPickFive === "" || watchPickSix === "")) ||
                        (!watchFirstPick && watchPickFive === "")
                      }
                    ></CharacterPicker>
                    <CharacterPicker
                      control={control}
                      name="pick_two"
                      excluded={[
                        ...watchPrebans,
                        watchPickZero,
                        watchPickOne,
                        watchPickThree,
                        watchPickFour,
                        watchPickFive,
                        watchPickSix,
                        watchPickSeven,
                        watchPickEight,
                        watchPickNine,
                      ]}
                      disabled={
                        (watchFirstPick &&
                          (watchPickFive === "" || watchPickSix === "")) ||
                        (!watchFirstPick &&
                          (watchPickSix === "" || watchPickSeven === ""))
                      }
                    ></CharacterPicker>
                    <CharacterPicker
                      control={control}
                      name="pick_three"
                      excluded={[
                        ...watchPrebans,
                        watchPickZero,
                        watchPickOne,
                        watchPickTwo,
                        watchPickFour,
                        watchPickFive,
                        watchPickSix,
                        watchPickSeven,
                        watchPickEight,
                        watchPickNine,
                      ]}
                      disabled={
                        (watchFirstPick &&
                          (watchPickSeven === "" || watchPickEight === "")) ||
                        (!watchFirstPick &&
                          (watchPickSix === "" || watchPickSeven === ""))
                      }
                    ></CharacterPicker>
                    <CharacterPicker
                      control={control}
                      name="pick_four"
                      excluded={[
                        ...watchPrebans,
                        watchPickZero,
                        watchPickOne,
                        watchPickTwo,
                        watchPickThree,
                        watchPickFive,
                        watchPickSix,
                        watchPickSeven,
                        watchPickEight,
                        watchPickNine,
                      ]}
                      disabled={
                        (watchFirstPick &&
                          (watchPickSeven === "" || watchPickEight === "")) ||
                        (!watchFirstPick &&
                          (watchPickEight === "" || watchPickNine === ""))
                      }
                    ></CharacterPicker>
                  </div>

                  <div className="basis-1/2 flex flex-col gap-y-2">
                    <CharacterPicker
                      control={control}
                      name="pick_five"
                      excluded={[
                        ...watchPrebans,
                        watchPickZero,
                        watchPickOne,
                        watchPickTwo,
                        watchPickThree,
                        watchPickFour,
                        watchPickSix,
                        watchPickSeven,
                        watchPickEight,
                        watchPickNine,
                      ]}
                      disabled={watchFirstPick && watchPickZero === ""}
                    ></CharacterPicker>
                    <CharacterPicker
                      control={control}
                      name="pick_six"
                      excluded={[
                        ...watchPrebans,
                        watchPickZero,
                        watchPickOne,
                        watchPickTwo,
                        watchPickThree,
                        watchPickFour,
                        watchPickFive,
                        watchPickSeven,
                        watchPickEight,
                        watchPickNine,
                      ]}
                      disabled={
                        (watchFirstPick && watchPickZero === "") ||
                        (!watchFirstPick &&
                          (watchPickZero === "" || watchPickOne === ""))
                      }
                    ></CharacterPicker>
                    <CharacterPicker
                      control={control}
                      name="pick_seven"
                      excluded={[
                        ...watchPrebans,
                        watchPickZero,
                        watchPickOne,
                        watchPickTwo,
                        watchPickThree,
                        watchPickFour,
                        watchPickFive,
                        watchPickSix,
                        watchPickEight,
                        watchPickNine,
                      ]}
                      disabled={
                        (watchFirstPick &&
                          (watchPickOne === "" || watchPickTwo === "")) ||
                        (!watchFirstPick &&
                          (watchPickZero === "" || watchPickOne === ""))
                      }
                    ></CharacterPicker>
                    <CharacterPicker
                      control={control}
                      name="pick_eight"
                      excluded={[
                        ...watchPrebans,
                        watchPickZero,
                        watchPickOne,
                        watchPickTwo,
                        watchPickThree,
                        watchPickFour,
                        watchPickFive,
                        watchPickSix,
                        watchPickSeven,
                        watchPickNine,
                      ]}
                      disabled={
                        (watchFirstPick &&
                          (watchPickOne === "" || watchPickTwo === "")) ||
                        (!watchFirstPick &&
                          (watchPickTwo === "" || watchPickThree === ""))
                      }
                    ></CharacterPicker>
                    <CharacterPicker
                      control={control}
                      name="pick_nine"
                      excluded={[
                        ...watchPrebans,
                        watchPickZero,
                        watchPickOne,
                        watchPickTwo,
                        watchPickThree,
                        watchPickFour,
                        watchPickFive,
                        watchPickSix,
                        watchPickSeven,
                        watchPickEight,
                      ]}
                      disabled={
                        (watchFirstPick &&
                          (watchPickThree === "" || watchPickFour === "")) ||
                        (!watchFirstPick &&
                          (watchPickTwo === "" || watchPickThree === ""))
                      }
                    ></CharacterPicker>
                  </div>
                </div>
                <label>Recommended Picks by Winrate:</label>
                <div>
                  <h2>
                    {"Sample & Sample (62.3%), Sample2 & Sample3 (55.89%)"}
                  </h2>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
