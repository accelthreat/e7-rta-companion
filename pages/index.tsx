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

type Match = {
  first_pick?: boolean | undefined;
  prebans?: (string | undefined)[] | undefined;
  pick_zero?: string | undefined;
  pick_one?: string | undefined;
  pick_two?: string | undefined;
  pick_three?: string | undefined;
  pick_four?: string | undefined;
  pick_five?: string | undefined;
  pick_six?: string | undefined;
  pick_seven?: string | undefined;
  pick_eight?: string | undefined;
  pick_nine?: string | undefined;
};

export async function getServerSideProps() {
  return {
    props: {
      matches: sample_games,
    },
  };
}

function matchPicks(pick: string, picks: string[]): boolean {
  return [...picks, ""].includes(pick);
}

function arrayEquals(a: any[], b: any[]) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

function findCompletedPicks(match: Match): number[] {
  const first_picks = [
    match.pick_zero!,
    match.pick_one!,
    match.pick_two!,
    match.pick_three!,
    match.pick_four!,
  ];
  const second_picks = [
    match.pick_five!,
    match.pick_six!,
    match.pick_seven!,
    match.pick_eight!,
    match.pick_nine!,
  ];
  let index = first_picks.indexOf("");
  let secondIndex = second_picks.indexOf("");
  console.log("Index, secondIndex", index, secondIndex);

  if (!match.first_pick) {
    [index, secondIndex] = [secondIndex, index];
  }

  if (index === 0) return [0];
  else if (index === 1 && secondIndex < 2) {
    return [5, 6];
  } else if (secondIndex === 2 && index < 3) {
    return [1, 2];
  } else if (index === 3 && secondIndex < 4) {
    return [7, 8];
  } else if (secondIndex === 4 && index !== -1) {
    return [3, 4];
  } else if (index === -1 && secondIndex === 4) {
    return [9];
  } else return [-1];
}

type Pick = {
  picks: string[];
  wins: number;
  loses: number;
};

type PickArray = {
  picks: Pick[];
  searchIndex: number[];
};

const pickArrayReducer = (result: PickArray, match: RtaMatch): PickArray => {
  const searchIndex = result.searchIndex;
  let picks: string[] = [];
  const first_pick = searchIndex[0] < 5;

  if (first_pick) {
    picks = match.first_pick_characters.slice(
      searchIndex[0],
      searchIndex[1] + 1
    );
  } else {
    picks = match.second_pick_characters.slice(
      searchIndex[0] - 5,
      searchIndex[1] - 5 + 1
    );
  }

  const index = result.picks.findIndex((val) => {
    return arrayEquals(val.picks.sort(), picks.sort());
  });

  if (index !== -1) {
    result.picks[index].wins =
      (first_pick && match.winner === 0) || (!first_pick && match.winner === 1)
        ? result.picks[index].wins + 1
        : result.picks[index].wins;
    result.picks[index].loses =
      (first_pick && match.winner === 1) || (!first_pick && match.winner === 0)
        ? result.picks[index].loses + 1
        : result.picks[index].loses;
  } else {
    result.picks.push({
      picks: picks,
      wins:
        (first_pick && match.winner === 0) ||
        (!first_pick && match.winner === 1)
          ? 1
          : 0,
      loses:
        (first_pick && match.winner === 1) ||
        (!first_pick && match.winner === 0)
          ? 1
          : 0,
    });
  }

  return {
    picks: result.picks,
    searchIndex: result.searchIndex,
  };
};

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

  const [recommendations, setRecommendations] = useState<Pick[]>([]);

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
          return (
            matchPicks(currentMatch.pick_zero!, [
              match.first_pick_characters[0],
            ]) &&
            matchPicks(currentMatch.pick_one!, [
              match.first_pick_characters[1],
              match.first_pick_characters[2],
            ]) &&
            matchPicks(currentMatch.pick_two!, [
              match.first_pick_characters[1],
              match.first_pick_characters[2],
            ]) &&
            matchPicks(currentMatch.pick_three!, [
              match.first_pick_characters[3],
              match.first_pick_characters[4],
            ]) &&
            matchPicks(currentMatch.pick_four!, [
              match.first_pick_characters[3],
              match.first_pick_characters[4],
            ]) &&
            matchPicks(currentMatch.pick_five!, [
              match.second_pick_characters[0],
              match.second_pick_characters[1],
            ]) &&
            matchPicks(currentMatch.pick_six!, [
              match.second_pick_characters[0],
              match.second_pick_characters[1],
            ]) &&
            matchPicks(currentMatch.pick_seven!, [
              match.second_pick_characters[2],
              match.second_pick_characters[3],
            ]) &&
            matchPicks(currentMatch.pick_eight!, [
              match.second_pick_characters[2],
              match.second_pick_characters[3],
            ]) &&
            matchPicks(currentMatch.pick_nine!, [
              match.second_pick_characters[4],
            ])
          );
        } else {
          return (
            matchPicks(currentMatch.pick_zero!, [
              match.second_pick_characters[0],
              match.second_pick_characters[1],
            ]) &&
            matchPicks(currentMatch.pick_one!, [
              match.second_pick_characters[0],
              match.second_pick_characters[1],
            ]) &&
            matchPicks(currentMatch.pick_two!, [
              match.second_pick_characters[2],
              match.second_pick_characters[3],
            ]) &&
            matchPicks(currentMatch.pick_three!, [
              match.second_pick_characters[2],
              match.second_pick_characters[3],
            ]) &&
            matchPicks(currentMatch.pick_four!, [
              match.second_pick_characters[4],
            ]) &&
            matchPicks(currentMatch.pick_five!, [
              match.first_pick_characters[0],
            ]) &&
            matchPicks(currentMatch.pick_six!, [
              match.first_pick_characters[1],
              match.first_pick_characters[2],
            ]) &&
            matchPicks(currentMatch.pick_seven!, [
              match.first_pick_characters[1],
              match.first_pick_characters[2],
            ]) &&
            matchPicks(currentMatch.pick_eight!, [
              match.first_pick_characters[3],
              match.first_pick_characters[4],
            ]) &&
            matchPicks(currentMatch.pick_nine!, [
              match.first_pick_characters[3],
              match.first_pick_characters[4],
            ])
          );
        }
      });
      console.log("Same starting picks:", same_starting_picks);
      console.log(currentMatch);
      const searchIndex = findCompletedPicks(currentMatch);
      let testRecommendations = same_starting_picks.reduce(pickArrayReducer, {
        picks: [],
        searchIndex: searchIndex,
      });
      console.log("Test Recommendations", testRecommendations);

      setRecommendations(
        testRecommendations.picks.sort((a, b) => {
          const a_win_rate = a.wins / (a.wins + a.loses);
          const b_win_rate = b.wins / (b.wins + b.loses);

          if (a_win_rate < b_win_rate) return 1;
          else if (a_win_rate === b_win_rate) return 0;
          else return -1;
        })
      );
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
                    {recommendations.map((pick) => {
                      if (pick.picks.length > 1) {
                        return (
                          <div>{`${pick.picks[0]} & ${pick.picks[1]} (${(
                            (pick.wins / (pick.wins + pick.loses)) *
                            100
                          ).toFixed(2)}%)`}</div>
                        );
                      } else {
                        return (
                          <div>{`${pick.picks[0]} (${(
                            (pick.wins / (pick.wins + pick.loses)) *
                            100
                          ).toFixed(2)}%)`}</div>
                        );
                      }
                    })}
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
